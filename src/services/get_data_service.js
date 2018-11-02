import axios from 'axios'
import qs from 'qs';
import store from '../store'

//获取全部签到记录
export const  get_sign_all = async ()=> {
  axios.get('/api/signs')
  .then(function (response) {
    alert(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const get_sign_from_account = async (account)=> {
   return axios.get('/api/signs/'+account)
    .then(response => {
        return response.data;
    })
    .catch(err=>{
        console.log(err);
    })
}

export const if_people_sign = async (account_name) => {
    let accountResult = await get_sign_from_account(account_name);
    let isAlreadySign = false;
    if (accountResult && accountResult.length > 0 ) {
        accountResult.forEach(element => {
           if( new Date(element.created_at).getDate() == new Date().getDate()) {
              isAlreadySign = true;
           }
        });
    }

    if (isAlreadySign) {
        return true;
    } else {
       return false;
    }
}

export const sign_onday = async (account_name)=> {
    let data = qs.stringify({
        'account': account_name
    })
    return await axios.post('/api/signs',data,{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
    .then(response => {
       alert("签到成功")
       return true
    })
    .catch(function (error) {
        return false
    });
}

// 更新gamelog表

export const add_counter = async (player)=> {

    let data = qs.stringify({
        'player': player,
    })
    axios.post('/api/counter',data,{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
    .then(function (response) {
       //alert("更新投注情况成功")
    })
    .catch(function (error) {
       // alert(error)
    });
}

// 更新gamelog表

export const add_gamelog = async (player,landID,amount,type,recast)=> {

    let data = qs.stringify({
        'player': player,
        'landID' : landID,
        "amount" : amount,
        "type" : type,
        "recast" : recast
    })

    axios.post('/api/gamelog',data,{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
    .then(function (response) {
       //alert("更新投注情况成功")
    })
    .catch(function (error) {
       // alert(error)
    });
}



/**
 *  查询用户用户投注情况
 *  @player 账户名称
 * 
*/
export const get_game_log = async (player) => {
    return axios.get('/api/gamelog/'+player)
    .then(response => {
        return response.data;
    })
    .catch(err=>{
        console.log(err);
    })
}