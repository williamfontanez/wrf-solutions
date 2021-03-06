import { all, call } from '@redux-saga/core/effects'

// import { fetchCollectionsStart } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'
import { shopSagas } from './shop/shop.sagas'

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas), call(shopSagas)])
}
