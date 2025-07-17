import { defineType } from 'sanity';

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (rule) => rule.required(),
        },
        {
            name: 'description',
            type: 'text',
            validation: (rule) => rule.required(),
        },
        {
            name: 'category',
            type: 'string',
            validation: (rule) =>
                rule.min(1).max(20).required().error('Please enter a category'),
        },
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'pitch',
            type: 'markdown',
        },
        {
            name: 'views',
            type: 'number',
            initialValue: 0,
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'image',
        },
        prepare(selection) {
            const { author } = selection;
            return {
                ...selection,
                subtitle: author && `by ${author}`,
            };
        },
    },
});
