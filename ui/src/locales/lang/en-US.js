import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

const locale = {
  'site.title': 'ZenData',

  'menu.data.list': 'Data List',
  'menu.data.edit': 'Data Edit',
  'menu.config.list': 'Config List',
  'menu.config.edit': 'Config Edit',
  'menu.ranges.list': 'Ranges List',
  'menu.ranges.edit': 'Ranges Edit',
  'menu.instances.list': 'Instances List',
  'menu.instances.edit': 'Instances Edit',
  'menu.excel.list': 'Excel List',
  'menu.excel.edit': 'Excel Edit',
  'menu.text.list': 'Text List',
  'menu.text.edit': 'Text Edit',

  'title.data.create': 'Data Creation',
  'title.config.create': 'Config Creation',
  'title.ranges.create': 'Ranges Creation',
  'title.instances.create': 'Instances Creation',
  'title.excel.create': 'Excel Creation',
  'title.text.create': 'Text Creation',

  'msg.mine': 'My Data',
  'msg.buildin': 'Build In',
  'msg.info': 'Information',
  'msg.range': 'Range',
  'msg.reference': 'Reference',
  'msg.preview': 'Preview',

  'msg.workdir': 'WorkDir',
  'msg.help': 'Help',
  'msg.yes': 'Yes',
  'msg.no': 'No',

  'msg.data': 'Data',
  'msg.config': 'Config',
  'msg.ranges': 'Ranges',
  'msg.instances': 'Instances',
  'msg.excel': 'Excel',
  'msg.excel.sheet': 'Excel Sheet',
  'msg.text': 'Text',
  'msg.exec': 'Execution',
  'msg.file': 'File',

  'msg.design.title': 'TestData Design',
  'msg.design.create.brother': 'Create Brother',
  'msg.design.create.child': 'Create Child',
  'msg.design.remove.node': 'Remove node',

  'action.list': 'List',
  'action.create': 'Create',
  'action.add': 'Add',
  'action.edit': 'Edit',
  'action.delete': 'Delete',
  'action.design': 'Design',
  'action.back': 'Back',
  'action.import.from.file': 'Import From Files',

  'tips.refer': 'Reference',
  'tips.pls.select': 'Please select',
  'tips.number': 'Number',
  'tips.range.int': 'Integer or a range of integers',
  'tips.number.or.letter': 'Number or single letter',

  'tips.delete': 'Are you sure to delete?',
  'tips.search': 'Input keywords to search',
  'tips.success.to.import': 'Success to import.',
  'tips.zero': '0 means retrieve all records.',
  'tips.expr': 'You use a expression like "($field_step_negative * $field_nested_range) * -1 + 1000".',
  // 请输入数学运算表达式，由相同文件中的字段组成，如""

  'form.name': 'Name',
  'form.file': 'File',
  'form.dir': 'Directory',
  'form.sub.dir': 'Sub Directory',
  'form.folder': 'Folder',
  'form.path': 'Path',
  'form.file.name': 'File Name',
  'form.desc': 'Description',
  'form.content': 'Content',
  'form.prefix': 'Prefix',
  'form.postfix': 'Postfix',
  'form.loop': 'Loop',
  'form.loopfix': 'LoopFix',
  'form.type': 'Type',
  'form.type.list': 'List',
  'form.type.timestamp': 'TimeStamp',
  'form.type.interval': 'Interval',
  'form.type.literal': 'Literal',
  'form.width': 'Width',
  'form.mode': 'Mode',
  'form.mode.parallel': 'Parallel',
  'form.mode.recursive': 'Recursive',
  'form.left.pad': 'Left Pad',
  'form.right.pad': 'Right Pad',
  'form.rand': 'Random',
  'form.format': 'Format',
  'form.function': 'Function',
  'form.start': 'Start',
  'form.end': 'End',
  'form.value': 'Value',
  'form.repeat': 'repeat',
  'form.step': 'Step',
  'form.col': 'Column',
  'form.count': 'Count',
  'form.expr': 'Expression',
  'form.opt': 'Operation',
  'form.save': 'Save',
  'form.reset': 'Reset',
  'form.cancel': 'Cancel',

  'valid.required': 'Can not be empty.',
  'valid.loop.check': 'Should be integer or a range of integers',
  'valid.folder.users': 'Data must be saved in users/ dir',
  'valid.folder.yaml': 'YAML must be saved in /yaml',
  'valid.folder.data': 'Excel must be saved in data/ dir',

}

export default {
  ...components,
  ...locale
}
