import toast from 'react-hot-toast';

export class Toast {
    static Success(message: string): void {
        console.log('success toast', message);
        toast.success(message);
    }

    static Error(message: string): void {
        console.log('error toast', message);
        toast.error(message);
    }
}
