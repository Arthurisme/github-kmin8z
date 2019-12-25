export interface State {
    isPeeled: boolean;
    bitesRemaining: number;
    color: string;
}
 
export const initialState: State =  {
        isPeeled: false,            // For our new banana we need to initialize
        bitesRemaining: 7,          // all properties of the banana
        color: 'yellow'
      } as State;
