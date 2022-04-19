/* wwEditor:start */
import './components/SendEmail.vue';
/* wwEditor:end */

export default {
    /*=============================================m_ÔÔ_m=============================================\
        WeWeb Email API
    \================================================================================================*/
    async sendEmail({ recipients, subject, content }) {
        const designId = wwLib.wwWebsiteData.getInfo().id;
        await axios.post(`${wwLib.wwApiRequests._getApiUrl()}/designs/${designId}/send-email`, {
            recipients,
            subject,
            content,
        });
    },
};
