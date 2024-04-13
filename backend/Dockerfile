FROM python:3

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app
# setup venv
RUN python -m venv venv
# activate venv
RUN . venv/bin/activate

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/

# Command to run the application
CMD python manage.py migrate && gunicorn --bind 0.0.0.0:8000 core.wsgi:application
