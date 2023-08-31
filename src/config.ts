import { InstanceBase } from '@companion-module/base'
import { Regex, type SomeCompanionConfigField } from '@companion-module/base'

export interface ArubaOssConfig {
  host?: string
}

export function GetConfigFields(_self: InstanceBase<ArubaOssConfig>): SomeCompanionConfigField[] {
  return [
    {
      type: 'textinput',
      id: 'host',
      label: 'Target IP',
      width: 8,
      regex: Regex.IP,
    },
    {
      type: 'textinput',
      id: 'port',
      label: 'Target Port',
      width: 4,
      regex: Regex.PORT,
    },
  ]
}