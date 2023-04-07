interface User {
    id: number;
    email: string;
    name: string;
    phone: string;
    photo: string;
    position: string;
}

export interface LandingState {
    users: User[];
    page: number;
    totalPages: number;
    isLoadingList: boolean;
		isLoadingForm: boolean;
    userHasBeenCreated: boolean;
}

export interface UsersRequestResponse {
    users: User[];
    page: number;
    total_pages: number;
}
