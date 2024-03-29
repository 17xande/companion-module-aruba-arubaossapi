import { combineRgb } from '@companion-module/base'
import { ArubaOssInstance } from './main'

export async function UpdateFeedbacks(instance: ArubaOssInstance) {
	instance.setFeedbackDefinitions({
		ChannelState: {
			name: 'Example Feedback',
			type: 'boolean',
			// label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'num',
					type: 'number',
					label: 'Test',
					default: 5,
					min: 0,
					max: 10,
				},
			],
			callback: (feedback) => {
				console.log('Hello world!', feedback.options.num)
				if (feedback.options.num ?? 0 > 5) {
					return true
				} else {
					return false
				}
			},
		},
	})
}
