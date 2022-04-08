export default {
    editor: {},
    functions: [
        {
            name: 'Send an email',
            code: 'sendEmail',
            parameters: [
                { name: 'Recipients', type: 'array' },
                { name: 'Subject', type: 'string' },
                { name: 'Content', type: 'string' },
            ],
            isAsync: true,
            /* wwEditor:start */
            edit: () => import('./src/components/SendEmail.vue'),
            /* wwEditor:end */
        },
    ],
};
