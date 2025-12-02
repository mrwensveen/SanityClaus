import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'programmingLanguage',
  title: 'Programming Language',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'paradigms',
      title: 'Paradigms',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'paradigm',
          title: 'Paradigm',
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'url' }),
          ],
        }),
      ],
    })
  ],
})
