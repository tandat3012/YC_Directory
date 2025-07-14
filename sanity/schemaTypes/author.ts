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
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'username',
            title: 'Username',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule) => rule.required().email(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'url',
        },
        {
            name: 'bio',
            title: 'Bio',
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
