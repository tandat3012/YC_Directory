import { defineType } from 'sanity';

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number',
            validation: (rule) => rule.required(),
        },
        {
            name: 'name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'username',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'email',
            type: 'string',
            validation: (rule) => rule.required().email(),
        },
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'username',
            media: 'image',
        },
    },
});
