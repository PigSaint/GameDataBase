import { Props, StylesConfig } from 'react-select';

export type SelectOption = {
    value: string;
    label: string;
};

export type CommonSelectProps = Pick<
    Props<SelectOption, true>,
    'classNamePrefix' | 'styles' | 'menuPortalTarget' | 'menuPosition' | 'isDisabled' | 'placeholder'
>;

export type SelectOverlayStyles = StylesConfig<SelectOption, true>;
