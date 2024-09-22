import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHotelsAsync } from "../redux/hotelSlice";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchForm = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Загружаем список направлений
  useEffect(() => {
    axios.get("http://localhost:3001/destinations").then((response) => {
      setDestinations(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.destination) {
      formErrors.destination = "Пожалуйста, выберите направление";
    }
    if (!formData.checkInDate) {
      formErrors.checkInDate = "Пожалуйста, выберите дату заезда";
    }
    if (!formData.checkOutDate) {
      formErrors.checkOutDate = "Пожалуйста, выберите дату выезда";
    }
    if (new Date(formData.checkInDate) >= new Date(formData.checkOutDate)) {
      formErrors.checkOutDate = "Дата выезда должна быть позже даты заезда";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация формы перед отправкой
    if (!validateForm()) {
      return;
    }

    // Отправляем запрос на сервер через Redux action
    dispatch(fetchHotelsAsync(formData));

    // Перенаправляем на страницу с отелями
    navigate("/hotels");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ minWidth: 200 }} error={Boolean(errors.destination)}>
        <InputLabel id="destination-label">Направление</InputLabel>
        <Select
          labelId="destination-label"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Выберите направление</em>
          </MenuItem>
          {destinations.map((dest) => (
            <MenuItem key={dest.id} value={dest.id}>
              {dest.label}
            </MenuItem>
          ))}
        </Select>
        {errors.destination && (
          <p style={{ color: "red" }}>{errors.destination}</p>
        )}
      </FormControl>

      <TextField
        name="checkInDate"
        label="Дата заезда"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={handleChange}
        error={Boolean(errors.checkInDate)}
        helperText={errors.checkInDate}
      />
      <TextField
        name="checkOutDate"
        label="Дата выезда"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={handleChange}
        error={Boolean(errors.checkOutDate)}
        helperText={errors.checkOutDate}
      />
      <TextField
        name="adults"
        label="Взрослые"
        type="number"
        onChange={handleChange}
        error={Boolean(errors.adults)}
        helperText={errors.adults}
      />
      <TextField
        name="children"
        label="Дети"
        type="number"
        onChange={handleChange}
        error={Boolean(errors.children)}
        helperText={errors.children}
      />

      <Button type="submit" variant="contained" color="primary">
        Найти отели
      </Button>
    </Box>
  );
};

export default SearchForm;
