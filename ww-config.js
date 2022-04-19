export default {
    editor: {},
    actions: [
        {
            name: 'Send an email',
            code: 'sendEmail',
            isAsync: true,
            /* wwEditor:start */
            edit: () => import('./src/components/SendEmail.vue'),
            /* wwEditor:end */
        },
    ],
};
