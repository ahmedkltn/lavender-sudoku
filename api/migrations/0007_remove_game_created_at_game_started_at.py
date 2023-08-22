# Generated by Django 4.2.3 on 2023-08-22 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_game_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='created_at',
        ),
        migrations.AddField(
            model_name='game',
            name='started_at',
            field=models.TimeField(default='00:00:00'),
            preserve_default=False,
        ),
    ]
