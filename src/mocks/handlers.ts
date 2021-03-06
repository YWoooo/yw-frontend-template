import { rest } from 'msw'

export const handlers = [
  rest.get('/cat/:id', (req, res, ctx) => {
    return res(
      ctx.status(200), 
      ctx.json(catsMock.find((cat) => cat.id === req.params.id))
    )
  }),
  rest.post('/cats', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catsMock))
  })
]

const catsMock = [
  {
    id: '595f280a557291a9750ebf58',
    created_at: '2016-12-28T11:51:30.730Z',
    tags: ['advent-calendar-2016', 'gif']
  },
  {
    id: '595f280a557291a9750ebf62',
    created_at: '2016-09-22T19:20:55.627Z',
    tags: ['jump', 'fail', 'gif']
  },
  {
    id: '595f280b557291a9750ebf67',
    created_at: '2016-09-22T19:22:49.206Z',
    tags: ['boxe', 'gif']
  },
  {
    id: '595f280b557291a9750ebf6c',
    created_at: '2016-09-22T19:12:54.037Z',
    tags: ['fail', 'roll', 'gif']
  },
  {
    id: '595f280c557291a9750ebf76',
    created_at: '2016-11-25T03:46:11.837Z',
    tags: ['kitten']
  }
]
