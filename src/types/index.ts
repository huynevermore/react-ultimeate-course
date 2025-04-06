export interface ITodoItem {
    id: number;
    title: string;
}

export interface IAction {
    type: string;
    payload?: any;
}

export interface IAppState {
    isLoading: boolean;
    theme: string;
    product: IProduct[]
}

export interface RootState {
    app: IAppState
}

export interface IProduct {
    id: number;
    name: string;
    status: string
}