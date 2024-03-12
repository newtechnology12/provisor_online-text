import {defineField, defineType} from 'sanity'

const quizzes = defineType({
  name: 'quizz',
  title: 'Quizz',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'isFree',
      type: 'boolean',
    }),
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'english'},
          {title: 'Kinyarwanda', value: 'kinyarwanda'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'questions',
      type: 'array',
      of: [{type: 'question'}],
    }),
  ],
})

const question = defineType({
  name: 'question',
  title: 'Question',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'answers',
      type: 'array',
      of: [{type: 'answer'}],
    }),
  ],
})

const answer = defineType({
  name: 'answer',
  title: 'Answer',
  type: 'object',
  fields: [
    defineField({
      name: 'answer',
      type: 'string',
    }),
    defineField({
      name: 'isCorrect',
      type: 'boolean',
    }),
  ],
})

const lesson = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'english'},
          {title: 'Kinyarwanda', value: 'kinyarwanda'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [{type: 'section'}],
    }),
  ],
})

const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})
export const schemaTypes = [quizzes, question, answer, lesson, section]
