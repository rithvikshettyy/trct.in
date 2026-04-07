import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'week',
      title: 'Week Number',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM DD, YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      initialValue: '7:00 AM',
    }),
    defineField({
      name: 'location',
      title: 'Location Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mapLink',
      title: 'Location Map Link',
      type: 'url',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'distance',
      title: 'Distance',
      type: 'string',
    }),
    defineField({
      name: 'attendees',
      title: 'Attendees',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'thumbnail',
    },
  },
})
