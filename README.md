# Custom Sidebar

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![HACS Action](https://github.com/elchininet/custom-sidebar/actions/workflows/hacs.yaml/badge.svg)](https://github.com/elchininet/custom-sidebar/actions/workflows/hacs.yaml)
[![Tests](https://github.com/elchininet/custom-sidebar/actions/workflows/tests.yaml/badge.svg)](https://github.com/elchininet/custom-sidebar/actions/workflows/tests.yaml)
[![Coverage Status](https://coveralls.io/repos/github/elchininet/custom-sidebar/badge.svg?branch=master)](https://coveralls.io/github/elchininet/custom-sidebar?branch=master)
[![downloads](https://img.shields.io/github/downloads/elchininet/custom-sidebar/total)](https://github.com/elchininet/custom-sidebar/releases)

[![Home Assistant Nightly Beta Tests](https://github.com/elchininet/custom-sidebar/actions/workflows/ha-beta-tests.yaml/badge.svg)](https://github.com/elchininet/custom-sidebar/actions/workflows/ha-beta-tests.yaml)

Custom [HACS] plugin that allows you to personalise the [Home Assistant]'s sidebar per user or device basis

<table>
  <thead>
    <tr>
      <th width="25%">Default sidebar</th>
      <th width="25%">Hide/add some items</th>
      <th width="25%">Reorder items</th>
      <th width="25%">Personalise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">
      </td>
    </tr>
    <tr>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/default-sidebar.png" alt="default sidebar" /><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/new-items.png" alt="hide and new items" /><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/reorder-items.png" alt="reorder items" /><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/personalise.png" alt="personalise" /><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
    </tr>
  </tbody>
</table>

This is a refactor of [custom-sidebar-v2] by @galloween, which unfortunatelly is now unmaintained and archived. In its beginning, @galloween's code was a refactor of the [original Custom Sidebar] plugin by @Villhellm (R.I.P.). This version refactored completely @galloween's code allowing to use a configuration in `YAML` (as @Villhellm's one) or in `JSON` (as @galloween's version), fixing several bugs, improving performance, and using [home-assistant-query-selector] to make it less likely to break with future Home Assistant front-end updates.

## Installation

You can install the plugin manually or through [HACS], not both. If you install the plugin using the two installations methods you could have issues or errors.

### Through HACS (v2 or greater)

>[!NOTE]
>If your version of `HACS` is lower than `v2` consult the section [Through old HACS versions (< v2)](#through-old-hacs-versions--v2)

1. Go to `HACS` dashboard
2. Search for `custom-sidebar` and click on it
3. On the plugin page, click on the `Download` yellow button in the bottom-right corner
4. Click on `Download` in the more-info dialog
5. When the plugin is already downloaded, add the url of the plugin as an [extra_module_url] in your `configuration.yaml`:

#### If you want to use a `YAML` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar-yaml.js?v1.0.0
```

#### If you want to use a `JSON` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar-json.js?v1.0.0
```

6. Restart Home Assistant

>[!TIP]
>It is recomendable that you add the plugin's version at the end of the URL as a parameter (e.g. `?v=1.0.0`) to force Home Assistant to load the new version instead of a version stored in cache. This step is not mandatory, but if you start suffering from caching issues, this would be one of the first steps to perform.

### Through old HACS versions (< v2)

1. Go to `HACS` dashboard
2. Go to `Frontend`
3. Click on `Explore and download repositories` button in the bottom-right of the screen
4. Search for `custom-sidebar` and install it
5. Add the url of the plugin as an [extra_module_url] in your `configuration.yaml`:

#### If you want to use a `YAML` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar-yaml.js?v1.0.0
```

#### If you want to use a `JSON` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar-json.js?v1.0.0
```

6. Restart Home Assistant

>[!TIP]
>It is recomendable that you add the plugin's version at the end of the URL as a parameter (e.g. `?v=1.0.0`) to force Home Assistant to load the new version instead of a version stored in cache. This step is not mandatory, but if you start suffering from caching issues, this would be one of the first steps to perform.

### Manual installation

1. Download the latest [custom-sidebar release]
2. Copy `custom-sidebar-yaml.js` or `custom-sidebar-json.js` into `<config directory>/www/` (depending on the configuration format that you are going to use,  `YAML` or `JSON`)
3. Add the url of the plugin as an [extra_module_url] in your `configuration.yaml`:

#### If you want to use a `YAML` configuration

```yaml
frontend:
  extra_module_url:
    - /local/custom-sidebar-yaml.js?v1.0.0
```

#### If you want to use a `JSON` configuration

```yaml
frontend:
  extra_module_url:
    - /local/custom-sidebar-json.js?v1.0.0
```

4. Restart Home Assistant

>[!TIP]
>It is recomendable that you add the plugin's version at the end of the URL as a parameter (e.g. `?v=1.0.0`) to force Home Assistant to load the new version instead of a version stored in cache. This step is not mandatory, but if you start suffering from caching issues, this would be one of the first steps to perform.

## Configuration

Depending on the file that you have added to [extra_module_url], you will need to add your configuration in `YAML` or `JSON` format. If you used `custom-sidebar-yaml.js` you need to provide the configuration in `YAML` format. If you have used `custom-sidebar-json.js` you need to provide the configuration in `JSON` format.

>[!TIP]
>In principle, using a `YAML` or a `JSON` configuration  is a matter of taste and preference. If you don't plan to use templates, there is no advantage of one over the other, but if you plan to use templates, specially complex ones, `YAML` is recommended because you can write code blocks in multiple lines. As `JSON` doesn't allow line breaks, you would need to write the complete template in a single line.

Add a file named `sidebar-config.yaml` or `sidebar-config.json` into your `<config directory>/www/` directory. It is recomendable that you copy the [example sidebar-config.yaml] or the [example sidebar-config.json] file, delete the `id` parameter, and modify it to match your needs. It is recommended to start with the simplest configuration and start to extend it step by step, in that way if you suffer any issue, it is easy to indentify with which code block it started. If you want to check an extensive sidebar configuration which uses custom styles, variables and templates, check @Mariusthvdb's [sidebar-config.yaml](https://gist.github.com/Mariusthvdb/e41957dc6f66d9764e0480030c9bd386).



### Configuration options

| Property           | Type                               | Required | Description |
| ------------------ | ---------------------------------- | -------- | ----------- |
| order              | Array of [items](#order-items-properties) | no| List of items to process |
| title<sup>\*</sup> | String                             | no       | Custom title to replace the `Home Assistant` title |
| title_color<sup>\*</sup> | String                       | no       | Sets the color of the sidebar title |
| subtitle<sup>\*</sup> | String                          | no       | Sets a custom subtitle below the `Home Assistant` title |
| subtitle_color<sup>\*</sup> | String                     | no      | Sets the color of the sidebar subtitle |
| sidebar_background<sup>\*</sup> | String                | no       | Sets the background of the sidebar. It could be a color or [a background declaration] |
| sidebar_border_color<sup>\*</sup> | String              | no       | Sets the border-right color of the sidebar |
| menu_background<sup>\*</sup>    | String                | no       | Sets the background of the sidebar menu area (the one containing the menu button and the title). If it is not set, the `sidebar_background` option will be used. It could be a color or [a background declaration] |
| sidebar_editable<sup>\*</sup> | Boolean or String       | no       | If it is set to false, long press on the sidebar title will be ignored and the button to edit the sidebar in the profile panel will be disabled. As a string it should be a JavaScript or a Jinja template that returns a boolean or a promise that resolves in a boolean |
| sidebar_mode       | String                             | no       | Defines the default status of the sidebar when Home Assistant is loaded. It has three possible values: "hidden" to make the sidebar hidden, "narrow" to make the sidebar visible in narrow state and "extended" to make sidebar visible in extended state. This option will show or hide the sidebar ignoring if it is a desktop or a mobile device or if the `Always hide the sidebar` switch in the profile page in on or off (depending on the value of this option, this switch will be switched on or off automatically) |
| sidebar_button_color<sup>\*</sup> | String              | no       | Sets the color of the sidebar hamburger menu |
| item_background<sup>\*</sup> | String                   | no       | Sets the background of the sidebar items. It could be a color or [a background declaration] |
| item_background_hover<sup>\*</sup> | String             | no       | Sets the background of the sidebar items in a hover state. It could be a color or [a background declaration] |
| icon_color<sup>\*</sup> | String                        | no       | Sets the color of the sidebar icons |
| icon_color_selected<sup>\*</sup> | String               | no       | Sets the icon color of the selected sidebar item |
| icon_color_hover<sup>\*</sup> | String                  | no       | Sets the icon color of the sidebar items in a hover state |
| text_color<sup>\*</sup> | String                        | no       | Sets the text color of the sidebar items |
| text_color_selected<sup>\*</sup> | String               | no       | Sets the text color of the selected sidebar item |
| text_color_hover<sup>\*</sup> | String                  | no       | Sets the text color of the sidebar items in a hover state |
| selection_background<sup>\*</sup> | String              | no       | Sets the background of the selected item. It could be a color or [a background declaration]. If it is not specified, the `icon_color_selected` will be used |
| selection_opacity<sup>\*</sup> | Number or String       | no       | Sets the opacity of the selected item background. It should be a number between `0` (fully transparent) and `1` (fully opaque). If it is not specified, the default `0.12` will be used |
| info_color<sup>\*</sup> | String                        | no       | Sets the color of the info texts of the sidebar items |
| info_color_selected<sup>\*</sup> | String               | no       | Sets the color of the info text of the selected sidebar item |
| info_color_hover<sup>\*</sup> | String                  | no       | Sets the color of the info texts in a hover state |
| notification_color<sup>\*</sup>  | String               | no       | Sets the color of the sidebar notifications |
| notification_color_selected<sup>\*</sup>  | String      | no       | Sets the color of the sidebar notification of the selected sidebar item |
| notification_color_hover<sup>\*</sup>  | String         | no       | Sets the color of the sidebar notification when the item is in hover state |
| notification_text_color<sup>\*</sup>  | String          | no       | Sets the color of the sidebar notifications texts |
| notification_text_color_selected<sup>\*</sup>  | String | no       | Sets the color of the sidebar notification texts of the selected sidebar item |
| notification_text_color_hover<sup>\*</sup>  | String    | no       | Sets the color of the sidebar notifications texts when the item is in hover state |
| divider_color<sup>\*</sup>       | String               | no       | Sets the color of both sidebar dividers |
| divider_top_color<sup>\*</sup>   | String               | no       | Sets the color of the top sidebar divider. It overrides `divider_color` for this divider if it is set |
| divider_bottom_color<sup>\*</sup> | String               | no       | Sets the color of the bottom sidebar divider. It overrides `divider_color` for this divider if it is set |
| scrollbar_thumb_color<sup>\*</sup>| String              | no       | Sets the color of the sidebar scrollbar (This option uses non-baseline CSS styles and it could not work in some browsers) |
| styles             | String                             | no       | Custom styles that will be added to the styles block of the plugin. Useful to override styles |
| js_variables       | Object                             | no       | An object containing variales that will be used in [JavaScript templates](#javascript-templates). The variables cannot be templates and they must be strings, numbers or booleans |
| jinja_variables       | Object                          | no       | An object containing variales that will be used in [Jinja templates](#jinja-templates). The variables cannot be templates and they must be strings, numbers or booleans |
| partials              | Object                          | no       | An object containing fragments of code that can be included in your templates. Consult [the partial section](#partials) for more info |

>[!TIP]
>\* These options allow [JavaScript](#javascript-templates) or [Jinja](#jinja-templates) templates.

#### Order items properties

| Property                  | Type    | Required  | Description |
| ------------------------- | ------- | --------- | ----------- |
| item                      | String  | yes       | This is a string that will be used to match each sidebar item by its text, its `data-panel` attribute or its `href`. If the `exact` property is not set, it is case insensitive and it can be a substring such as `developer` instead of `Developer Tools` or `KITCHEN` instead of `kitchen-lights`. |
| match                     | String  | no        | This property will define which string will be used to match the `item` property. It has three possible values "text" (default) to match the text content of the element, "data-panel" to match the `data-panel` attribute of the element, or "href", to match the `href` attribute of the element |
| exact                     | Boolean | no        | Specifies whether the `item` string match should be an exact match (`true`) or not (`false`). |
| order                     | Number  | no        | Sets the order number of the sidebar item |
| hide                      | Boolean | no        | Setting this property to `true` will hide the sidebar item |
| name<sup>\*</sup>         | String  | no        | Changes the name of the sidebar item |
| icon<sup>\*</sup>         | String  | no        | Specifies the icon of the sidebar item |
| info<sup>\*</sup>         | String  | no        | Sets the content of the info text (a smaller secondary text below the main item text) |
| notification<sup>\*</sup> | String  | no        | Add a notification badge to the sidebar item |
| item_background<sup>\*</sup> | String | no      | Sets the background of the items. It could be a color or [a background declaration] (it overrides the global `item_background`) |
| item_background_hover<sup>\*</sup> | String  | no | Sets the background of the items in a hover state. It could be a color or [a background declaration] (it overrides the global `item_background_hover`) |
| icon_color<sup>\*</sup>   | String  | no        | Sets the color of the icon (it overrides the global `icon_color`) |
| icon_color_selected<sup>\*</sup> | String | no  | Sets the icon color of the item when it is selected (it overrides the global `icon_color_selected`) |
| icon_color_hover<sup>\*</sup> | String | no     | Sets the item icon color in a hover state (it overrides the global `icon_color_hover`) |
| text_color<sup>\*</sup> | String    | no        | Sets the text color of the item (it overrides the global `text_color`) |
| text_color_selected<sup>\*</sup> | String | no  | Sets the text color of the item when it is selected (it overrides the global `text_color_selected`) |
| text_color_hover<sup>\*</sup> | String | no     | Sets the item text color in a hover state (it overrides the global `text_color_hover`) |
| selection_background<sup>\*</sup> | String      | no  | Sets the background of the item when it is selected. It could be a color or [a background declaration]. If it is not specified, the `icon_color_selected` will be used |
| selection_opacity<sup>\*</sup> | Number or String | no       | Sets the opacity of the item background when it is selected. It should be a number between `0` (fully transparent) and `1` (fully opaque). If it is not specified, the default `0.12` will be used (it overrides the global `selection_opacity`) |
| info_color<sup>\*</sup> | String | no           | Sets the color of the info text (it overrides the global `info_color`) |
| info_color_selected<sup>\*</sup> | String | no  | Sets the color of the info text when the item is selected (it overrides the global `info_color_selected`) |
| info_color_hover<sup>\*</sup> | String | no     | Sets the color of the info text in a hover state (it overrides the global `info_color_hover`) |
| notification_color<sup>\*</sup>  | String | no  | Sets the notification color (it overrides the global `notification_color`) |
| notification_color_selected<sup>\*</sup>  | String  | no | Sets the color of the item notification when it is selected (it overrides the global `notification_color_selected`) |
| notification_color_hover<sup>\*</sup>  | String | no | Sets the color of the item notification in hover state (it overrides the global `notification_color_hover`) |
| notification_text_color<sup>\*</sup>  | String  | no       | Sets the color of the notification text (it overrides the global `notification_text_color`) |
| notification_text_color_selected<sup>\*</sup>  | String | no | Sets the color of the notification text when it is selected (it overrides the global `notification_text_color_selected`) |
| notification_text_color_hover<sup>\*</sup>  | String | no | Sets the color of the notifications text in hover state (it overrides the global `notification_text_color_hover`) |
| bottom                    | Boolean | no        | Setting this property to `true` will group the item with the bottom items (Configuration, Developer Tools, etc) |
| href                      | String  | no        | Specifies the `href` of the sidebar item |
| target                    | String  | no        | Specifies the [target property] of the sidebar item |
| new_item                  | Boolean | no        | Set this property to `true` to create a new item in the sidebar. **Using this option makes `href` and `icon` required properties** |

>[!TIP]
>\* These item properties allow [JavaScript](#javascript-templates) or [Jinja](#jinja-templates) templates.

Short example in `YAML` format:

```yaml
title: My Home
icon_color_selected: var(--accent-color)
order:
  - new_item: true
    item: Google
    href: https://mrdoob.com/projects/chromeexperiments/google-gravity/
    icon: mdi:earth
    target: _blank
    order: 1
  - item: overview
    order: 2
  - new_item: true
    item: Automations
    href: "/config/automation"
    icon: mdi:robot
    info: |
      {{ states.automation | selectattr('state', 'eq', 'on') | list | count }} active
    order: 3
```

Short example in `JSON` format:

```json5
{
  "title": "My Home",
  "icon_color_selected": "var(--accent-color)",
  "order": [
    {
      "new_item": true,
      "item": "Google",
      "href": "https://mrdoob.com/projects/chromeexperiments/google-gravity/",
      "icon": "mdi:earth",
      "target": "_blank",
      "order": 1
    },
    {
      "item": "overview",
      "order": 2
    },
    {
      "new_item": true,
      "item": "Automations",
      "href": "/config/automation",
      "icon": "mdi:robot",
      "info": "{{ states.automation | selectattr('state', 'eq', 'on') | list | count }} active",
      "order": 3
    }
  ]
 }
```

> [!IMPORTANT]
>* All items in `config.order` should have a unique `item` property
>* Avoid an `item` property that could match multiple elements. If you find that an item property matches with multiple elements, try to use the `match` and `exact` properties to match the specific item that you want to match.
>* The items will be ordered according to their `order` property OR in the order of appearance
>* If you use the `order` property in at least one item, make sure either all items (except hidden ones) have this property, or none of them (otherwise order may be messed up)
>* All the items placed in the bottom will be moved to the top by default. If you want to have some items in the bottom you need to add them to the `config.order` and specify their `bottom` property on `true`.
>* Any items present in the Sidebar, but not in `config.order`, will be shown **on the bottom** of the top part of the list
>* Notifications and user account are not part of the main sidebar items so they cannot be targeted inside the `order` option to change their properties. On the other hand, global color properties will affect these items though.
>* The `style` option doesn't allow templates, it should be used only to override or correct some styles of the sidebar.

### Exceptions

You can define user-specific options using exceptions feature. Exceptions can be used if you would like to define different options for a specific user/device.
In an exception you can define almost all the options available in [the main configuration options](#configuration-options) (excluding `js_variables`, `jinja_variables` and `partials`). And on top of those options, the next ones will be available:

| Property            | Type              | Required | Description |
| ------------------- | ----------------- | -------- | ----------- |
| extend_from_base    | Boolean           | no       | If true, the options will be extended with the root options. The property `order` will be merged with the base one, the rest of properties will use the base counterpart if they are not specified. If it is false, it will take into account only the options in the exception |
| user       | String or String[] | no          | Home Assistant user name(s) you would like to display this order for |
| not_user   | String or String[] | no          | Home Assistant user name(s) you wouldn't like to display this order for |
| device     | String or String[] | no          | Device(s) you would like to display this order for. E.g. ipad, iphone, macintosh, windows, android (it uses the device's [user-agent]) |
| not_device | String or String[] | no          | Device(s) you wouldn't like to display this order for. E.g. ipad, iphone, macintosh, windows, android (it uses the device's [user-agent]) |

Short example in `YAML` format:

```yaml
...
exceptions:
  - user:
    - Jim Hawkins
    - Long John Silver
    title: My Home
    order:
      ...
```

Short example in `JSON` format:

```json5
{
  ...
  "exceptions": [
    {
      "user": ["Jim Hawkins", "Long John Silver"],
      "title": "My Home",
      "order": [
          ...
      ]
    }
  ]  
}
```

> [!IMPORTANT]
>* You cannot use `user` and `not_user` at the same time, doing so will end in an error
>* You cannot use `device` and `not_device` at the same time, doing so will end in an error
>* Pay attention to `extend_from_base` property. If it's set to `false` (default value), the main `config` will be ignored, leaving you with default sidebar modified only by the exception's options

## Templates

Some config options and item properties, as `title`, `sidebar_editable`, `name` `notification`, and `info`, admit templates. `custom-sidebar` admits two templating systems, [JavaScript templates](#javascript-templates) or [Jinja templates](#jinja-templates). `JavaScript` templates are processed faster because the rendering is done in client side, `Jinja` templates need to perform a [websocket call] to receive the template result, but in general you should not notice many differences between the two in terms of performance. The main difference between the two templating systems (apart from the syntax) is that `JavaScript` can access client side data like DOM APIs and can return [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), and `Jinja` templates are mostly agnostic to the device in which `Home Assistant` is being executed.

### JavaScript templates

This templating system IS NOT [the same that Home Assistant implements](https://www.home-assistant.io/docs/configuration/templating). It is basically a `JavaScript` code block in which you can use certain client-side objects, variables and methods. To set a property as a `JavaScript` template block, include the code between three square brackets `[[[ JavaScript code ]]]`. If you don‘t use the square brackets, the property will be interpreted as a regular string.

The `JavaScript` code will be taken as something that you want to return, but if you have a more complex logic, you can create your own variables and return the desired result at the end.

The entities used in the templates will be stored, so if the state of an stored entity changes, all the templates that use this entity will be reevaluated snd rerendered. On top of this, if the variable `panel_url` is used in a template, the template will be reevaluated every time that a new panel or a new view is loaded.

#### JavaScript templates example

The next example will set the next options:

1. Sets the title of the sidebar as "My Home" followed by the current time.
2. Sets the background of the sidebar `red` when the panel config is selected and `green` otherwise.
3. Adds the number of `HACS` updates as a notification in the `HACS` item in the sidebar. In case that there are no updates, an empty string is returned and in these cases the notification will not be displayed.
4. Creates a new item that redirects to the `Home Assistant` info page with a dynamic text with the word "Info" followed by the installed Supervisor version  between parentheses and the Operating System version in the info text.

##### in `YAML` format:

```yaml
title: '[[[ "My Home " + new Date(states("sensor.date_time_iso")).toLocaleTimeString().slice(0, 5) ]]]'
sidebar_background: |
  [[[
    return panel_url === '/config/dashboard'
      ? 'red'
      : 'green';
  ]]]
order:
  - item: hacs
    notification: |
      [[[
        const outdatedHacsEntities = Object.values(entities.update).filter(
          (entity) => entity.platform === 'hacs' && is_state(entity.entity_id, 'on')
        );
        return outdatedHacsEntities.length || '';
      ]]]
  - new_item: true
    item: info
    name: '[[[ "Info (" + state_attr("update.home_assistant_supervisor_update", "latest_version") + ")" ]]]'
    info: '[[[ return "OS " + state_attr("update.home_assistant_operating_system_update", "latest_version") ]]]'
    href: '/config/info'
    icon: mdi:information-outline
```

##### in `JSON` format:

```json5
{
  "title": "[[[ 'My Home ' + new Date(states('sensor.date_time_iso')).toLocaleTimeString().slice(0, 5) ]]]",
  "sidebar_background": "[[[ return panel_url === '/config/dashboard' ? 'red' : 'green' ]]]",
  "order": [
    {
      "item": "hacs",
      "notification": "[[[ return Object.values(entities.update).filter((entity) => entity.platform === 'hacs' && is_state(entity.entity_id, 'on')).length || '' ]]]"
    },
    {
      "new_item": true,
      "item": "info",
      "name": "[[[ 'Info (' + state_attr('update.home_assistant_supervisor_update', 'latest_version') + ')' ]]]",
      "info": "[[[ return 'OS ' + state_attr('update.home_assistant_operating_system_update', 'latest_version') ]]]",
      "href": "/config/info",
      "icon": "mdi:information-outline"
    }
  ]
}
```

>[!TIP]
`Custom Sidebar` uses [Home Assistant Javascript Templates] for the `JavaScript` templating system. To know all the objects, variables and methods available in the `JavaScript` templates, consult the [proper section](https://github.com/elchininet/home-assistant-javascript-templates?tab=readme-ov-file#objects-and-methods-available-in-the-templates) in the repository.

### Jinja templates

This templating system is [the same that Home Assistant implements](https://www.home-assistant.io/docs/configuration/templating). You can use the majority of the template methods and objects. The entire template will be processed, rendered and the result will be used as the desired option. If you don‘t want to display anything in certain scenarios, you should return an empty string in those cases. The next client side varianles will be available in `Jinja templates`:

* `user_name`: String with the logged user's name
* `user_is_admin`: Bolean value than indicates if the logged user is admin or not
* `user_is_owner`: Bolean value than indicates if the logged user is the owner or not
* `user_agent`: User agent of the browser in which Home Assistant is being executed

When the entities used in a templates change their state, it will trigger an update and the updated result of the template will be rendered.

#### Jinja templates example

The next example will set the next options:

1. Sets the title of the sidebar as "My Home" followed by the current time.
2. Adds the number of `HACS` updates as a notification in the `HACS` item in the sidebar. In case that there are no updates, an empty string is returned and in these cases the notification will not be displayed.
3. Creates a new item that redirects to the `Home Assistant` info page with a dynamic text with the word "Info" followed by the installed Supervisor version between parentheses and the Operating System version in the info text.

##### in `YAML` format:

```yaml
title: 'My Home {{ as_timestamp(states("sensor.date_time_iso")) | timestamp_custom("%H:%M") }}'
order:
  - item: hacs
    notification: |
      {{
        expand(states.update)
        | selectattr('state', 'eq', 'on')
        | map(attribute='entity_id')
        | map('device_attr', 'identifiers')
        | map('contains', 'hacs')
        | list
        | length or ""
      }}
  - new_item: true
    item: info
    name: 'Info ({{ state_attr("update.home_assistant_supervisor_update", "latest_version") }})'
    info: 'OS {{ state_attr("update.home_assistant_operating_system_update", "latest_version") }}'
    href: '/config/info'
    icon: mdi:information-outline
```

##### in `JSON` format:

```json5
{
  "title": "My Home {{ as_timestamp(states('sensor.date_time_iso')) | timestamp_custom('%H:%M') }}",
  "order": [
    {
      "item": "hacs",
      "notification": "{{ expand(states.update) | selectattr('state', 'eq', 'on') | map(attribute='entity_id') | map('device_attr', 'identifiers') | map('contains', 'hacs') | list | length or '' }}"
    },
    {
      "new_item": true,
      "item": "info",
      "name": "Info ({{ state_attr('update.home_assistant_supervisor_update', 'latest_version') }})",
      "info": "OS {{ state_attr('update.home_assistant_operating_system_update', 'latest_version') }}",
      "href": "/config/info",
      "icon": "mdi:information-outline"
    }
  ]
}
```

### Partials

Partials are fragments of code that can be included in your templates. They can be inserted in [JavaScript](#javascript-templates), [Jinja](#jinja-templates) templates or inside another partial. Any entity used in them will make the template in which the partial is inserted to be reevaluated when the entity changes its state, so it is not recommended to use a bloated partial using multiple entities that have no context with each other because that will provoke that the templates in which that partial is used get reevaluated when anyone of the entities used in it change.

> [!TIP]
>Partials will automatically use the variables set in the `js_variables` or `jinja_variables` (depending on the kind of template in which they are inserted).

#### Partials example with a JavaScript template

##### in `YAML` format:

```yaml
js_variables:
  supervisor_update: update.home_assistant_supervisor_update
  os_update: update.home_assistant_operating_system_update
partials:
  supervisor_version: |
    const supervisorVersion = state_attr(supervisor_update, "latest_version");
  updates: |
    @partial supervisor_version
    const osVersion = state_attr(os_update, "latest_version");
order:
  - new_item: true
    item: info
    name: |
      [[[
        @partial updates
        return `Info ${supervisorVersion}`;
      ]]]
    info: |
      [[[
        @partial updates
        return `OS ${ osVersion }`
      ]]]
    href: '/config/info'
    icon: mdi:information-outline
```

##### in `JSON` format:

```json5
{
  "js_variables": {
    "supervisor_update": "update.home_assistant_supervisor_update",
    "os_update": "update.home_assistant_operating_system_update"
  },
  "partials": {
    "supervisor_version": "const supervisorVersion = state_attr(supervisor_update, 'latest_version');",
    "updates": "@partial supervisor_version const osVersion = state_attr(os_update, 'latest_version');"
  },
  "order": [
    {
      "new_item": true,
      "item": "info",
      "name": "[[[ @partial updates return `Info ${supervisorVersion}`; ]]]",
      "info": "[[[ @partial updates return `OS ${ osVersion }`; ]]]",
      "href": "/config/info",
      "icon": "mdi:information-outline"
    }
  ]
}
```

#### Partials example with a Jinja template

##### in `YAML` format:

```yaml
jinja_variables:
  supervisor_update: update.home_assistant_supervisor_update
  os_update: update.home_assistant_operating_system_update
partials:
  supervisor_version: |
    {% set supervisorVersion = state_attr(supervisor_update, "latest_version") %}
  updates: |
    @partial supervisor_version
    {% set osVersion = state_attr(os_update, "latest_version") %}
order:
  - new_item: true
    item: info
    name: |
        @partial updates
        Info {{ supervisorVersion }}
    info: |
        @partial updates
        OS {{ osVersion }}
    href: '/config/info'
    icon: mdi:information-outline
```

##### in `JSON` format:

```json5
{
  "jinja_variables": {
    "supervisor_update": "update.home_assistant_supervisor_update",
    "os_update": "update.home_assistant_operating_system_update"
  },
  "partials": {
    "supervisor_version": "{% set supervisorVersion = state_attr(supervisor_update, 'latest_version') %}",
    "updates": "@partial supervisor_version {% set osVersion = state_attr(os_update, 'latest_version') %}"
  },
  "order": [
    {
      "new_item": true,
      "item": "info",
      "name": "@partial updates Info {{ supervisorVersion }}",
      "info": "@partial updates OS {{ osVersion }}",
      "href": "/config/info",
      "icon": "mdi:information-outline"
    }
  ]
}
```

## Home Assistant built-in sidebar configuration options

Check out Home Assistant's native sidebar tools, maybe it will be enough for your needs.

* You can use Home Assistant's `panel_custom` integration to add internal links to the sidebar. Take a look at [this tutorial](https://home-assistant-guide.com/2021/12/08/how-to-add-internal-links-to-the-home-assistant-sidebar). Official [docs](https://www.home-assistant.io/integrations/panel_custom).
* You can use Home Assistant's `Webpage dashboard` feature to add external URLs to Home Assistant's sidebar. Official [docs](https://www.home-assistant.io/dashboards/dashboards/#webpage-dashboard). If you use Home Assistant's `Webpage dashboard` feature to add some wepage dashboards to your sidebar, then you can modify them as the regular ones adding them to the `order` property.
* You can click and hold the Home Assistant header on top of the sidebar and then it will allow you to add/remove and re-order some of the items (but not add new custom ones). This feature is also accessible from your profile settings (if you click on your username in the bottom left corner). The drawback of this feature is that it only works per device/session, so you need to log-in in the specific device and do these changes, but if you log-out, the changes will be lost.

## Custom-sidebar extras

* Do you have an idea or a question? Open [a discussion](https://github.com/elchininet/custom-sidebar/discussions)
* Do you have an issue or have you encountered a bug? Open [an issue](https://github.com/elchininet/custom-sidebar/issues)
* Do you need to discuss or to show and tell? visit the [`custom-sidebar` entry](https://community.home-assistant.io/t/custom-sidebar-manage-home-assistants-sidebar-items-per-user-or-device-basis/665800) in the Home Assistant Forum
* [Video tutorial](https://www.youtube.com/watch?v=oecwBjPmlYo) about how to install the plugin (in Spanish) by @hectorzin

---

## Credits and huge thanks to:

* [Villhellm](https://github.com/Villhellm) | Original creator of custom-sidebar (R.I.P.).
* [galloween](https://github.com/galloween) | forked the original `custom-sidebar` and maintained it for a while

[HACS]: https://hacs.xyz
[Home Assistant]: https://www.home-assistant.io
[custom-sidebar-v2]: https://github.com/galloween/custom-sidebar-v2
[original Custom Sidebar]: https://github.com/Villhellm/custom-sidebar
[home-assistant-query-selector]: https://github.com/elchininet/home-assistant-query-selector
[extra_module_url]: https://www.home-assistant.io/integrations/frontend/#extra_module_url
[custom-sidebar release]: https://github.com/elchininet/custom-sidebar/releases
[example sidebar-config.json]: https://raw.githubusercontent.com/elchininet/custom-sidebar/master/sidebar-config.json
[example sidebar-config.yaml]: https://raw.githubusercontent.com/elchininet/custom-sidebar/master/sidebar-config.yaml
[target property]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
[user-agent]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
[Home Assistant Javascript Templates]: https://github.com/elchininet/home-assistant-javascript-templates
[websocket call]: https://developers.home-assistant.io/docs/api/websocket
[a background declaration]: https://developer.mozilla.org/en-US/docs/Web/CSS/background
