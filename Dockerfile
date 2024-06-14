# languageox/Dockerfile

# Use the official Python image from the Docker Hub
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Pipfile and Pipfile.lock
COPY Pipfile Pipfile.lock ./

# Install pipenv
RUN pip install pipenv

# Install the dependencies
RUN pipenv install --system --deploy

# Copy the rest of the code
COPY . .

# Expose port 8000
EXPOSE 8000

# Run migrations and start the Django server
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
