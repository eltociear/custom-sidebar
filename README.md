# Custom Sidebar

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![HACS Action](https://github.com/elchininet/custom-sidebar/actions/workflows/hacs.yaml/badge.svg)](https://github.com/elchininet/custom-sidebar/actions/workflows/hacs.yaml)

Custom [HACS] plugin that allows you to rearrange, hide, and add menu items to [Home Assistant]'s sidebar.

<table>
  <thead>
    <tr>
      <th width="25%">Default sidebar</th>
      <th width="25%">Hide some items</th>
      <th width="25%">Add new items</th>
      <th width="25%">Reorder items</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/default-sidebar.png" alt="default sidebar" />
      </td>
      <td>
        <img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/hide-items.png" alt="hide items" />
      </td>
      <td>
        <img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/new-items.png" alt="new items" />
      </td>
      <td>
        <img src="https://raw.githubusercontent.com/elchininet/custom-sidebar/master/images/reorder-items.png" alt="reorder items" />
      </td>
    </tr>
  </tbody>
</table>

This is a refactor of [custom-sidebar-v2] by @galloween, which unfortunatelly is now unmaintained and archived. In its beginning, @galloween's code was a refactor of the [original Custom Sidebar] plugin by @Villhellm (R.I.P.). This version refactored completely @galloween's code allowing to use `JSON` or `YAML` configurations, and using [home-assistant-query-selector] to make it less likely to break with future Home Assistant front-end updates.

## Installation

You can install the plugin manually or through [HACS], not both. If you install the plugin using the two installations methods you could have issues or errors.

### Through HACS

1. Go to `HACS` dashboard
2. Go to `Frontend`
3. Click on the three-dots icon in the top-right corner
4. Select `Custom repositories`
5. In the `repository` field insert `https://github.com/elchininet/custom-sidebar` and in the `category` select `Lovelace`
6. Click on `Add`
7. Click on `Explore and download repositories` button in the bottom-right of the screen
8. Search for `custom-sidebar` and install it
9. Add the url of the plugin as an [extra_module_url] in your `confgiguration.yaml` (unless you use [browser_mod]):

#### If you want to use a `JSON` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar.js?v1.0.0
```

#### If you want to use a `YAML` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar-yaml.js?v1.0.0
```

10. Make sure you add the correct version at the end of the URL (e.g. `?v=1.0.0`) because in this way you make Home Assistant to load the new version instead of a version stored in cache
12. Restart Home Assistant

### Manual installation

1. Download the latest [custom-sidebar release]
2. Copy `custom-sidebar.js` or `custom-sidebar-yaml.js` into `<config directory>/www/` (depending on the configuration format that you are going to use, `JSON` or `YAML`)
3. Add the url of the plugin as an [extra_module_url] in your `confgiguration.yaml` (unless you use [browser_mod]):

#### If you want to use a `JSON` configuration

```yaml
frontend:
  extra_module_url:
    - /local/custom-sidebar.js?v1.0.0
```

#### If you want to use a `YAML` configuration

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-sidebar/custom-sidebar-yaml.js?v1.0.0
```

4. Make sure you add the correct version at the end of the URL (e.g. `?v=1.0.0`) because in this way you make Home Assistant to load the new version instead of a version stored in cache
5. Restart Home Assistant

## Configuration

Depending on the file that you have added to [extra_module_url], you will need to add your configuration in `JSON` or `YAML` format. If you used `custom-sidebar.js` you need to provide the configuration in `JSON` format. If you have used `custom-sidebar-yaml.js` you need to provide the configuration in `YAML` format.

Add a file named `sidebar-order.json` or `sidebar-order.yaml` into your `<config directory>/www/` directory. It could be easier if you copy the [example sidebar-order.json] or the [example sidebar-order.yaml] file, delete the `id` parameter, and edit it to match your needs.

### Configuration options

| Property  | Type                               | Required | Description |
| --------- | ---------------------------------- | -------- | ----------- |
| order     | Array of [items](#item-properties) | true     | List of items to process |
| title     | String                             | false    | Custom title to replace the `Home Assistant` title |

#### Item properties

| Property  | Type    | Required | Description |
| --------- | ------- | -------- | ----------- |
| item      | String  | true     | This is a string that will be used to match each sidebar item by its text or its `data-panel` attribute. In the case of the item text, it can be a substring such as `developer` instead of `Developer Tools`. If the `exact` property is not set, it is case insensitive. |
| name      | String  | false     | Changes the name of the sidebar item |
| order     | Number  | false     | Sets the order number of the sidebar item |
| bottom    | Boolean | false     | Setting this property to `true` will group the item with the bottom items (Configuration, Developer Tools, etc) |
| hide      | Boolean | false     | Setting this property to `true` will hide the sidebar item |
| exact     | Boolean | false     | Specifies whether the `item` string match should be an exact match of the item text or an exact match of the `data-panel` attribute (case sensitive) |
| href      | String  | false     | Specifies the `href` of the sidebar item |
| target    | String  | false     | Specifies the [target property] of the sidebar item |
| icon      | String  | false     | Specifies the icon of the sidebar item |
| new_item  | Boolean | false     | Set this property to `true` to create a new item in the sidebar. **Using this option makes `href` and `icon` required properties** |

Short example in `JSON` format:

```json5
{
  "title": "My Home",
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
      "item": "Integrations",
      "href": "/config/integrations",
      "icon": "mdi:puzzle",
      "order": 3
    }
  ]
 }
```

Short example in `YAML` format:

```yaml
title: My Home
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
    item: Integrations
    href: "/config/integrations"
    icon: mdi:puzzle
    order: 3
```

#### Notes

* All items in `config.order` should have unique `item` property
* The items will be ordered according to their `order` property OR in the order of appearance
* If you use the `order` property, make sure either all items (except hidden ones) have this property, or none of them (otherwise order may be messed up)
* All the items placed in the bottom will be moved to the top by default. If you want to have some items in the bottom you need to add them to the `config.order` and specify their `bottom` property on `true`.
* Any items present in the Sidebar, but not in `config.order`, will be shown **on the bottom** of the top part of the list
* Notifications and user account are not part of the sidebar items so they will not be processed byt this plugin

### Exceptions

You can define user-specific order using exceptions feature. Exceptions can be used if you would like to define an order for a specific user/device.

| Property   | Type    | Required | Description |
| ---------- | ------- | -------- | ----------- |
| order      | Array of [items](#item-properties) | true   | Defines the sidebar items order |
| base_order | Boolean | false   | If true, the `order` property will be merged with the root `config.order` array |
| user       | String or String[] | false   | Home Assistant user name(s) you would like to display this order for |
| not_user   | String or String[] | false   | Home Assistant user name(s) you wouldn't like to display this order for |
| device     | String or String[] | false   | Device(s) you would like to display this order for. E.g. ipad, iphone, macintosh, windows, android (it uses the device's [user-agent]) |
| not_device | String or String[] | false   | Device(s) you wouldn't like to display this order for. E.g. ipad, iphone, macintosh, windows, android (it uses the device's [user-agent]) |

Short example in `JSON` format:

```json5
{
  ...
  "exceptions": [
    {
      "user": ["Jim Hawkins", "Long John Silver"],
      "order": [
          ...
      ]
    }
  ]  
}
```

Short example in `YAML` format:

```yaml
...
exceptions:
  - user:
    - Jim Hawkins
    - Long John Silver
    order:
      ...
```

#### Notes

* You cannot use `user` and `not_user` at the same time, doing so will end in an error
* You cannot use `device` and `not_device` at the same time, doing so will end in an error
* Pay attention to `base_order` property. If it's set to `false` (default value), the main `config.order` will be ignored, leaving you with default sidebar modified only by the exception's orders

## Home Assistant built-in sidebar configuration options

Check out Home Assistant's native sidebar tools, maybe it will be enough for your needs.

* You can use HA's `panel_custom` integration to add internal links to the sidebar. Take a look at [this tutorial](https://home-assistant-guide.com/2021/12/08/how-to-add-internal-links-to-the-home-assistant-sidebar). Official [docs](https://www.home-assistant.io/integrations/panel_custom).
* You can use HA's `panel_iframe` integration to add external links. [See below](#combine-with-iframe-panel-to-show-external-content-inside-home-assitant). Official [docs](https://www.home-assistant.io/integrations/panel_iframe).
* You can click and hold the Home Assistant header on top of the sidebar and then it will allow you to add/remove and re-order some of the items (but not add new custom ones). This feature is also accessible from your profile settings (if you click on your username in the bottom left corner)

## Combine with Iframe Panel to show external content inside Home Assitant

If you use [Home Assistant's Iframe Panel feature] and have some iframe_panel links configured in `configuration.yaml`:

```yaml
panel_iframe:
  router:
    title: "Router"
    url: "http://192.168.1.1"
    icon: mdi:router-wireless
  fridge:
    title: "Fridge"
    url: "http://192.168.1.5"
    icon: mdi:fridge
```

Then you can modify them as the regular ones:

#### In `JSON` format

```json5
{
  "order": [
    { "item": "fridge" },
    { "item": "overview" },
    { "item": "router" }
    ...
  ]
}
```

#### In `YAML` format

```yaml
order:
  - item: fridge
  - item: overview
  - item: router
  ...
```

---

## Credits and huge thanks to:

* [Villhellm](https://github.com/Villhellm/custom-sidebar) | Original creator of custom-sidebar (R.I.P.).
* [galloween](https://github.com/galloween) | forked the `original custom-sidebar` and maintained it for a while

[HACS]: https://hacs.xyz
[Home Assistant]: https://www.home-assistant.io
[custom-sidebar-v2]: https://github.com/galloween/custom-sidebar-v2
[original Custom Sidebar]: https://github.com/Villhellm/custom-sidebar
[home-assistant-query-selector]: https://github.com/elchininet/home-assistant-query-selector
[extra_module_url]: https://www.home-assistant.io/integrations/frontend/#extra_module_url
[browser_mod]: https://github.com/thomasloven/hass-browser_mod
[custom-sidebar release]: https://github.com/elchininet/custom-sidebar/releases
[example sidebar-order.json]: https://raw.githubusercontent.com/elchininet/custom-sidebar/master/sidebar-order.json
[example sidebar-order.yaml]: https://raw.githubusercontent.com/elchininet/custom-sidebar/master/sidebar-order.yaml
[target property]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
[user-agent]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
[Home Assistant's Iframe Panel feature]: https://www.home-assistant.io/integrations/panel_iframe/
