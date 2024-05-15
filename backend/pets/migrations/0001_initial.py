# Generated by Django 4.2.11 on 2024-05-15 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
                ('type', models.CharField(verbose_name='Type')),
                ('age', models.PositiveSmallIntegerField()),
                ('breed', models.CharField(verbose_name='Breed')),
                ('photo_url', models.URLField(verbose_name='Photo URL')),
                ('description', models.TextField(verbose_name='Description')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
