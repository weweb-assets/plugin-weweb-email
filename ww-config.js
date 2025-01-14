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
                description: 'Sends an email to one or more recipients with a specified subject and content',
                returns: 'void',
                schema: {
                    recipients: {
                        type: 'array',
                        description: 'Array of email addresses to send the email to',
                        bindable: true
                    },
                    subject: {
                        type: 'string',
                        description: 'Subject line of the email',
                        bindable: true
                    },
                    content: {
                        type: 'string',
                        description: 'HTML content of the email body',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
    ],
};