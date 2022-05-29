/**
 * @typedef  {object} ListObjectType
 * @property  {string} [id] UUID
 * @property {string} massage Notification Massage
 * @property {"warning"|"error"|"info"|"success"}  type Notification type to trigger
 */

export const notify = new(class{
    constructor(){
        makeObservable(this,{
            _list:observable,
            push:action,
            remove: action,
            removeAll:action,
        });
    }

    /**
    * Array of notification list
    * @type {Array<ListObjectType>}
    */

    _list = [];
    
    /**
    * Push new notification
    * @param {ListObjectType} data
    */
    push = ({massage,type,id})=>{
        this._list = [...this._list,{massage,type,id: id || uuidV4() }];
        
    };
    
    /**
    *   Remove Notification using notification ID
    *   @param {string|undefined|number} [id] Notification ID
    *   @return {void}
    */
    remove = (id)=>{
        this._list = this._list.filter((item)=> item.id !== id);
    };
    
    /**
    *   Returns all notification that avilable
    *   @return {void}
    */
    removeAll = () =>{
        this._list = [];
    };

})