<template>
  <div>
    <!-- カレンダーヘッダ -->
    <div id="cal-header">
      <span class="header-arrow" @click="setLastMonth">＜</span>
      <span class="selected-month">{{ year }}年{{ month }}月</span>
      <span class="header-arrow" @click="setNextMonth">＞</span>
    </div>

    <!-- カレンダーメイン -->
    <table id="cal-main">
      <!-- 曜日を表示させる（テーブルヘッダ） -->
      <thead>
        <th v-for="(dayname, index) in weekdays" :key="index">{{ dayname }}</th>
      </thead>
      <!-- 日付を表示させる（テーブルボディ） -->
      <tbody>
        <tr v-for="(weekData, index) in calData" :key="index">
          <td
            v-for="(dayNum, index) in weekData"
            :key="index"
            class="cal-day"
            :class="{
              'cal-today': isToday(dayNum),
              active: day === dayNum,
            }"
            @click="dateClick(dayNum)"
          >
            <span v-if="isToday(dayNum)">今日</span>
            <span v-else>{{ dayNum }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
      year: 2020,
      month: 3,
      day: -1,
      today: '',
    }
  },
  computed: {
    calData() {
      console.log(this.year + '-' + this.month + 'のデータ作成')
      const calData = []
      // 初日の曜日を取得
      const firstWeekDay = new Date(this.year, this.month - 1, 1).getDay()
      // 月の日数
      const lastDay = new Date(this.year, this.month, 0).getDate()
      // 日数カウント用
      let dayNum = 1
      // 週ごとのデータを作成して、calDateにpush
      while (dayNum <= lastDay) {
        const weekData = []

        // 日曜～土曜の日付データを配列で作成
        for (let i = 0; i <= 6; i++) {
          if (calData.length === 0 && i < firstWeekDay) {
            // 初週の1日以前の曜日は空文字
            weekData[i] = ''
          } else if (lastDay < dayNum) {
            // 最終日以降の曜日は空文字
            weekData[i] = ''
          } else {
            // 通常の日付入力
            weekData[i] = dayNum
            dayNum++
          }
        }
        calData.push(weekData)
      }
      return calData
    },
  },
  mounted() {
    const date = new Date()
    const y = date.getFullYear()
    const m = ('0' + (date.getMonth() + 1)).slice(-2)
    const d = ('0' + date.getDate()).slice(-2)

    // yearとmonthを設定
    this.year = y
    this.month = Number(m)
    // 今日の日付を設定
    this.today = y + '-' + m + '-' + d
  },
  methods: {
    /**
     * カレンダー日付クリック時の処理
     */
    dateClick(dayNum) {
      if (dayNum !== '') {
        this.day = dayNum
      }
    },
    /**
     * 今日かどうかの判定
     * 年、月は現在選択しているページ
     * 日は引数
     */
    isToday(day) {
      const date = this.year + '-' + ('0' + this.month).slice(-2) + '-' + day
      if (this.today === date) {
        return true
      }
      return false
    },
    /**
     * 先月のカレンダーを取得
     */
    setLastMonth() {
      if (this.month === 1) {
        this.year--
        this.month = 12
      } else {
        this.month--
      }
      this.day = -1
    },
    /**
     * 翌月のカレンダーを取得
     */
    setNextMonth() {
      if (this.month === 12) {
        this.year++
        this.month = 1
      } else {
        this.month++
      }
      this.day = -1
    },
  },
}
</script>
<style scoped>
/*---------------------------------------
ヘッダのcss
---------------------------------------*/
#cal-header {
  font-size: 24px;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
  background-color: #04d1b2;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
#cal-header span {
  padding: 15px 20px;
  color: white;
  display: inline-block;
}
/*---------------------------------------
カレンダーのcss
---------------------------------------*/
#cal-main {
  font-size: 14px;
  line-height: 20px;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}
#cal-main th {
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  color: #999;
}
#cal-main td {
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
}
.cal-today {
  background-color: #fcf8e3;
}
.cal-day.active {
  background-color: #ffc9d7;
}
</style>
