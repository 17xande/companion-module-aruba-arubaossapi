import { InstanceBase, runEntrypoint, InstanceStatus, SomeCompanionConfigField } from '@companion-module/base'
import { UpgradeScripts } from './upgrades'
import { UpdateActions } from './actions'
import { UpdateFeedbacks } from './feedbacks'
import { UpdateVariableDefinitions } from './variables'
import { ArubaOssConfig, GetConfigFields } from './config'

export class ArubaOssInstance extends InstanceBase<ArubaOssConfig> {
	public config: ArubaOssConfig = {}

	constructor(internal: unknown) {
		super(internal)
	}

	async init(config: ArubaOssConfig, isFirstInit: boolean) {
		this.updateStatus(InstanceStatus.Ok)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.log('debug', `first time? ${isFirstInit}`)

		return this.configUpdated(config)
	}

	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config: ArubaOssConfig) {
		this.config = config
	}

	// Return config fields for web config
	getConfigFields(): SomeCompanionConfigField[] {
		return GetConfigFields(this)
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}
}

runEntrypoint(ArubaOssInstance, UpgradeScripts)
