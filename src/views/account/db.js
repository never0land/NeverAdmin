import {reactive} from 'vue'

export const rules = function (Arr) {
    let rules = reactive({})
    if(Arr.length==0) return;
    Arr.forEach(element => {
        rules[element] = [
            {
                required:true,message:'必须要填写',trigger:'blur'
            }
        ]
    });
    return rules
};
