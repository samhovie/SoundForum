from .db import db, environment, SCHEMA, add_prefix_for_prod


class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    answer_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('answers.id')), nullable=False)
    text = db.Column(db.String(500), nullable=False)

    user = db.relationship('User', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'text': self.text,
            'answer_id': self.answer_id,
            'user': self.user.to_dict_no_question_answer()
        }
