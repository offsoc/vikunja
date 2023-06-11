
import type {IAbstract} from './IAbstract'
import type {IProject} from './IProject'
import type {PrefixMode} from '@/modules/parseTaskText'

export interface IFrontendSettings {
	playSoundWhenDone: boolean
	quickAddMagicMode: PrefixMode
}

export interface IUserSettings extends IAbstract {
	name: string
	emailRemindersEnabled: boolean
	discoverableByName: boolean
	discoverableByEmail: boolean
	overdueTasksRemindersEnabled: boolean
	overdueTasksRemindersTime: any
	defaultProjectId: undefined | IProject['id']
	weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6
	timezone: string
	language: string
	frontendSettings: IFrontendSettings
}