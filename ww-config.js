export default {
    editor: {},
    actions: [
        {
            name: 'Send an email',
            code: 'sendEmail',
            isAsync: true,
            /* wwEditor:start */
            edit: () => import('./src/components/SendEmail.vue'),
            copilot: {
                description: 'Send an email to multiple recipients',
                returns: 'null',
                schema: `{
                    args: {
                        content: __VALUE__ (Content of the email),
                        subject: __VALUE__ (Subject of the email),
                        recipients: __VALUE__ (Array of email addresses to send the email to)
                    }
                }`
            }
            /* wwEditor:end */
        },
    ],
};
