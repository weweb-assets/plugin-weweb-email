<template>
    <wwEditorInputRow
        :model-value="recipients"
        label="Recipients"
        type="array"
        bindable
        @update:modelValue="setRecipients"
        @add-item="setRecipients([...(recipients || []), ''])"
    >
        <template #default="{ item, setItem }">
            <wwEditorInputRow
                type="query"
                :model-value="item"
                placeholder="Enter an email"
                bindable
                small
                @update:modelValue="setItem($event)"
            />
        </template>
    </wwEditorInputRow>
    <wwEditorInputRow
        type="query"
        :model-value="subject"
        label="Subject"
        placeholder="Enter a value"
        required
        bindable
        @update:modelValue="setSubject"
    />
    <wwEditorInputRow
        type="code"
        language="html"
        :model-value="content"
        label="Content"
        placeholder="You can use HTML tags"
        required
        bindable
        @update:modelValue="setContent"
    />
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        args: { type: Array, default: () => [[], null, null] },
    },
    emits: ['update:args'],
    computed: {
        recipients() {
            return this.args[0];
        },
        subject() {
            return this.args[1];
        },
        content() {
            return this.args[2];
        },
    },
    methods: {
        setRecipients(recipients) {
            this.$emit('update:args', [recipients, this.subject, this.content]);
        },
        setSubject(subject) {
            this.$emit('update:args', [this.recipients, subject, this.content]);
        },
        setContent(content) {
            this.$emit('update:args', [this.recipients, this.subject, content]);
        },
    },
};
</script>
