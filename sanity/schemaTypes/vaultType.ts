import { defineField, defineType } from 'sanity'

export const vaultType = defineType({
  name: 'vaultRun',
  title: 'Vault Run',
  type: 'document',
  fields: [
    defineField({
      name: 'week',
      title: 'Week Number',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateLabel',
      title: 'Label (e.g., Past Run)',
      type: 'string',
      initialValue: 'Past Run',
    }),
    defineField({
      name: 'link',
      title: 'Google Drive Link',
      type: 'url',
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
      title: 'week',
      subtitle: 'dateLabel',
      media: 'thumbnail',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: `Week ${title}`,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
