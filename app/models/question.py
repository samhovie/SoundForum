from .db import db, environment, SCHEMA, add_prefix_for_prod


class Question(db.Model):
    __tablename__ = 'questions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    text = db.Column(db.String(255), nullable=False)

    user = db.relationship('User', back_populates='questions')

    answers = db.relationship('Answer', cascade='all, delete-orphan')





    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'text': self.text,
            'user': self.user.to_dict_no_question_answer(),
            'answers': [answer.to_dict() for answer in self.answers]
        }
