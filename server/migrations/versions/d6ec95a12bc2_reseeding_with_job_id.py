"""reseeding with job.id

Revision ID: d6ec95a12bc2
Revises: 
Create Date: 2024-03-06 14:56:08.749269

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd6ec95a12bc2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('jobs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('company', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('salary', sa.Integer(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('skill', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_jobs')),
    sa.UniqueConstraint('company', name=op.f('uq_jobs_company'))
    )
    op.create_table('marketing',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_marketing'))
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('profession', sa.String(), nullable=True),
    sa.Column('skills', sa.String(), nullable=True),
    sa.Column('contact', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_users')),
    sa.UniqueConstraint('username', name=op.f('uq_users_username'))
    )
    op.create_table('applys',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first', sa.String(), nullable=True),
    sa.Column('last', sa.String(), nullable=True),
    sa.Column('dob', sa.Integer(), nullable=True),
    sa.Column('phone', sa.Integer(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('street', sa.String(), nullable=True),
    sa.Column('city', sa.String(), nullable=True),
    sa.Column('state', sa.String(), nullable=True),
    sa.Column('zip', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('job_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['job_id'], ['jobs.id'], name=op.f('fk_applys_job_id_jobs')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_applys_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_applys'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('applys')
    op.drop_table('users')
    op.drop_table('marketing')
    op.drop_table('jobs')
    # ### end Alembic commands ###
