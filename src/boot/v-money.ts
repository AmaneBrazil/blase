import { boot } from 'quasar/wrappers';
import { Money3Directive } from 'v-money3';

export default boot(async ({ app }) => {
    app.directive('money3', Money3Directive);
});
