from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError


class QuestionForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
