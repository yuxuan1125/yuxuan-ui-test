import './styles/index.scss'

import Tag from './components/tag/index'
import LoadMore from './components/loadMore/index'
import Search from './components/search/index'
import Loading from './components/loading/index'
import Step from './components/step/index'
import Input from './components/input/index'
import Textarea from './components/textarea/index'
import Select from './components/select/index'
import Switch from './components/switch/index'
import Skeleton from './components/skeleton/index'
import Navbar from './components/navbar/index'
import Actionsheet from './components/actionsheet/index'

import Button from './components/button/index'
import Tabbar from './components/tabbar/index'
import Radio from './components/radio/index'
import Checkbox from './components/checkbox/index'
import Grid from './components/grid/index'
import Modal from './components/modal/index'
import SpModal from './components/spmodal/index'
import CellGroup from './components/cell/index'
import Flexbox from './components/flexbox/index'

import GlobalModal from './components/globalmodal/index'
import Toast from './components/toast/index'

const components = {
  Button,
  ButtonGroup: Button.group,
  Tag,
  LoadMore,
  Search,
  Modal,
  SpModal,
  Loading,
  Step,
  Input,
  Textarea,
  Select,
  Switch,
  Skeleton,
  TabbarItem: Tabbar.item,
  Tabbar,
  Navbar,
  Actionsheet,
  Radio,
  RadioGroup: Radio.group,
  Checkbox,
  CheckboxGroup: Checkbox.group,
  Grid,
  Grids: Grid.group,
  CellItem: CellGroup.item,
  CellGroup,
  FlexboxItem: Flexbox.item,
  Flexbox
}

const install = function (Vue) {
  if (install.installed) return
  // 这样可以让组件支持全局引入和按需引入
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  }) 

  Vue.prototype.$modal = GlobalModal
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
