const validateMovie = (req, res, next) => {
  // validate req.body then call next() if everything is ok
  const { title, director, year, color, duration } = req.body;
  const errors = [];

  if (title == null) {
    errors.push({ field: "title", message: "The field 'title' is required" });
  } else if (title.length >= 255) {
    errors.push({
      field: "title",
      message: "This field should contain less than 255 characters",
    });
  }
  if (director == null) {
    errors.push({
      field: "director",
      message: "The field 'director' is required",
    });
  } else if (director.length >= 255) {
    errors.push({
      field: "director",
      message: "This field should contain less than 255 characters",
    });
  }
  if (year == null) {
    errors.push({ field: "year", message: "The field 'year' is required" });
  } else if (year.length >= 255) {
    errors.push({
      field: "year",
      message: "This field should contain less than 255 characters",
    });
  }
  if (color == null) {
    errors.push({ field: "color", message: "The field 'color' is required" });
  } else if (color.length >= 255) {
    errors.push({
      field: "color",
      message: "This field should contain less than 255 characters",
    });
  }
  if (duration == null) {
    errors.push({
      field: "duration",
      message: "The field 'duration' is required",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];

  if (firstname == null) {
    errors.push({
      field: "firstname",
      message: "The field 'firstname' is required",
    });
  } else if (firstname.length >= 255) {
    errors.push({
      field: "firstname",
      message: "This field should contain less than 255 characters",
    });
  }

  if (lastname == null) {
    errors.push({
      field: "lastname",
      message: "The field 'lastname' is required",
    });
  } else if (lastname.length >= 255) {
    errors.push({
      field: "lastname",
      message: "This field should contain less than 255 characters",
    });
  }

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  } else if (email == null) {
    errors.push({
      field: "email",
      message: "The field 'email' is required",
    });
  } else if (email.length >= 255) {
    errors.push({
      field: "email",
      message: "This field should contain less than 255 characters",
    });
  }

  if (city == null) {
    errors.push({
      field: "city",
      message: "The field 'city' is required",
    });
  } else if (city.length >= 255) {
    errors.push({
      field: "city",
      message: "This field should contain less than 255 characters",
    });
  }

  if (language == null) {
    errors.push({
      field: "language",
      message: "The field 'language' is required",
    });
  } else if (language.length >= 255) {
    errors.push({
      field: "language",
      message: "This field should contain less than 255 characters",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  validateMovie,
  validateUser,
};
