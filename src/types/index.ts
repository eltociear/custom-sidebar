import { HomeAssistant, Hass } from 'home-assistant-javascript-templates';

type Primitive = string | number | boolean;

export enum SidebarMode {
    HIDDEN = 'hidden',
    NARROW = 'narrow',
    EXTENDED = 'extended'
}

export enum DockedSidebar {
    DOCKED = 'docked',
    AUTO = 'auto',
    ALWAYS_HIDDEN = 'always_hidden'
}

export interface HassExtended extends Hass {
    dockedSidebar: `${DockedSidebar}`;
}

export interface HomeAsssistantExtended extends HomeAssistant {
    hass: HassExtended;
}

export interface PartialPanelResolver extends HTMLElement {
    narrow: boolean;
    __route: {
        prefix: string,
        path: string;
    }
}

export interface HomeAssistantMain extends HTMLElement {
    hass: HassExtended;
    narrow: boolean;
}

export interface HaMenuButton extends HTMLElement {
    narrow: boolean;
}

export interface Sidebar extends HTMLElement {
    alwaysExpand: boolean;
    _mouseLeaveTimeout?: number;
    _showTooltip: (anchor: HTMLAnchorElement) => void;
    _hideTooltip: () => void;
}

export enum Match {
    TEXT = 'text',
    DATA_PANEL = 'data-panel',
    HREF = 'href'
}

export interface ItemColorConfig {
    item_background?: string;
    item_background_hover?: string;
    icon_color?: string;
    icon_color_selected?: string;
    icon_color_hover?: string;
    text_color?: string;
    text_color_selected?: string;
    text_color_hover?: string;
    selection_background?: string;
    selection_opacity?: number | string;
    info_color?: string;
    info_color_selected?: string;
    info_color_hover?: string;
    notification_color?: string;
    notification_color_selected?: string;
    notification_color_hover?: string;
    notification_text_color?: string;
    notification_text_color_selected?: string;
    notification_text_color_hover?: string;
}

export interface SidebarColorConfig extends ItemColorConfig {
    title_color?: string;
    subtitle_color?: string;
    sidebar_button_color?: string;
    sidebar_background?: string;
    menu_background?: string;
    scrollbar_thumb_color?: string;
    divider_color?: string;
    divider_top_color?: string;
    divider_bottom_color?: string;
    sidebar_border_color?: string;
}

export interface ConfigItem extends ItemColorConfig {
    item: string;
    match?: `${Match}`;
    exact?: boolean;
    name?: string;
    info?: string;
    notification?: string;
    order?: number;
    bottom?: boolean;
    hide?: boolean;
    href?: string;
    target?: '_self' | '_blank';
    icon?: string;
    new_item?: never;
}

export interface ConfigNewItem extends Omit<ConfigItem, 'new_item'> {
    new_item: boolean;
    item: string;
    href: string;
    icon: string;
}

export type ConfigOrder = ConfigItem | ConfigNewItem;
export type ConfigOrderWithItem = ConfigOrder & { element?: HTMLAnchorElement };

interface BaseConfig extends SidebarColorConfig {
    title?: string;
    subtitle?: string;
    order?: ConfigOrder[];
    sidebar_editable?: boolean | string;
    sidebar_mode?: `${SidebarMode}`;
    styles?: string;
}

interface ConfigExceptionBase extends BaseConfig {
    extend_from_base?: boolean;
}

interface ConfigExceptionUserInclude extends ConfigExceptionBase {
    user?: string | string[];
    not_user?: never;
}

interface ConfigExceptionUserExclude extends ConfigExceptionBase {
    user?: never;
    not_user?: string | string[];
}

interface ConfigExceptionDeviceInclude extends ConfigExceptionBase {
    device?: string | string[];
    not_device?: never;
}

interface ConfigExceptionDeviceExclude extends ConfigExceptionBase {
    device?: never;
    not_device?: string | string[];
}

type ConfigExceptionUser = ConfigExceptionUserInclude | ConfigExceptionUserExclude;
type ConfigExceptionDevice = ConfigExceptionDeviceInclude | ConfigExceptionDeviceExclude;

export type ConfigException = ConfigExceptionUser & ConfigExceptionDevice;

export interface Config extends BaseConfig {
    id?: string;
    js_variables?: Record<string, Primitive>;
    jinja_variables?: Record<string, Primitive>;
    partials?: Record<string, string>;
    exceptions?: ConfigException[];
}

export type ItemColorConfigKeys = keyof ItemColorConfig;
export type SidebarColorConfigKeys = keyof SidebarColorConfig;

export interface SubscriberTemplate {
    result: string;
}

declare global {
    interface Window {
        CustomSidebar: object;
    }
}