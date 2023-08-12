import { authConfirm } from './authConfirm';

export const listRepository=async (templateRepository:string):Promise<string>=>{

	if(templateRepository==='1'){
		return 'https://github.com/nestjs/typescript-starter.git'
	}

	if(templateRepository==='2'){
		const isAuth=await authConfirm();
		return isAuth?'https://github.com/asmel2020/NAPP-PPA.git':'https://github.com/asmel2020/NAPP-PP.git'
	}

	if (templateRepository==='3') {
		return 'https://github.com/asmel2020/Standalone-app.git'
	}


	return 'https://github.com/nestjs/typescript-starter.git'
}