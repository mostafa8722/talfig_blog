import Repository from '~/data/repositories/repository'
import { UserAccount } from '~/data/models/users/account'

export default class Account extends Repository {
  async updateUserAccount(data: UserAccount): Promise<UserAccount> {
    const res = await this.axios.post('/bank-account/update',data,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }

  async getUserAccount(): Promise<UserAccount> {
    const res = await this.axios.post('/bank-account/load', {  },{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|aRUzO00hlMpH1mbYuo7vAacVvrhofJ72gRd8HzYv'
      }
    })
    return res.data
  }
}