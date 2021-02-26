class User < ApplicationRecord
    has_secure_password

    # 指定された属性が空白ではないこと
    validates_presence_of :email
    #属性の値が一意であることをバリデーション
    # [ichiro]という名前を付けることができるユーザーが1人だけであること
    validates_uniqueness_of :email
end
