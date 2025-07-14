import { defineType } from 'sanity';

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (rule) => rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'url',
            validation: (rule) => rule.required(),
        },
        {
            name: 'pitch',
            title: 'Pitch',
            type: 'text',
            validation: (rule) => rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (rule) => rule.required(),
        },
        {
            name: 'views',
            title: 'Views',
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
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
