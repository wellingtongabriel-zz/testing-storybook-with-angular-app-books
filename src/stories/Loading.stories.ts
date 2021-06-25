import { Story, Meta } from '@storybook/angular/types-6-0';
import Loading from './loading/loading.component';

export default {
  title: 'Component/Loading',
  component: Loading,
} as Meta;

const Template: Story<Loading> = (args: Loading) => ({
  props: args,
});

export const LoadingDefault = Template.bind({});
LoadingDefault.args = {
    isLoading: true
};