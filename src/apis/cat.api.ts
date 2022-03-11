import { axiosInstance } from '@/apis/index'
import { Cat } from '@/types/index'

export default {
  async cat(id: string): Promise<Cat> {
    const res = await axiosInstance.get(`cat/${id}`)
    return res.data
  },
  async cats(): Promise<Cat[]> {
    const res = await axiosInstance.post('/cats')
    return res.data
  }
}
