<template>
    <v-card rounded='xl' class='px-5 py-7'>
      <v-row align='center'>
        <v-col md='6' cols='12'>
            <div class='d-flex flex-wrap mb-9'>
              <div class='' id='title'>عنوان مدیر</div>
              <v-btn depressed rounded  color='#009D4C' class='activate mt-2 mx-4 chp'  >
                <v-icon left small >fa-check</v-icon>
                 فعال سازی
              </v-btn>
              <v-btn depressed rounded color='#FF5C5C' class='activate mt-2 chp'>
                <v-icon left small >fa-trash</v-icon>
                بلاک مدیر
              </v-btn>
            </div>

            <v-text-field style="width:75%"  class='d-flex rounded-lg '  placeholder='مدیر داخلی' outlined></v-text-field>

          <span>توضیحات نقش</span>
      <v-textarea placeholder='توضیحات' outlined class='d-flex rounded-lg mt-2' rows="10" ></v-textarea>

        </v-col>
        <v-col cols='12' md='6'  class='pl-14'>
          <v-row>
            <v-col cols='12' md='6' class=''>
                 <span>نام</span>
              <v-text-field class='mt-2 rounded-lg' outlined placeholder='نام'></v-text-field>
            <span>ایمیل</span>
              <v-text-field class='rounded-lg mt-2' placeholder='ایمیل' outlined></v-text-field>
            <span> رمز عبور</span>
              <v-text-field class='rounded-lg mt-2' placeholder='رمز عبور' outlined></v-text-field>
            </v-col>
            <v-col cols='12' md='6' class=''>
            <span>  نام خانوادگی</span>
              <v-text-field class='rounded-lg mt-2' placeholder=' نام خانوادگی' outlined></v-text-field>
              <span>موبایل</span>
              <v-text-field class='rounded-lg mt-2' placeholder='موبایل' outlined></v-text-field>
              <span>تکرار رمز</span>
              <v-text-field class='rounded-lg mt-2' placeholder='تکرار رمز' outlined></v-text-field>

            </v-col>
            <v-col cols='12'>
              <v-text-field  outlined   rounded  class='  mt-2'  append-icon='fa-search'  placeholder='جستجوی نقش' ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-btn class='mr-auto sav mt-2' color='#00B728'  rounded depressed outlined>ذخیره اطلاعات</v-btn>
      </v-row>
     </v-card>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend(
  {
    name: 'DetailsForm'
  }
)
</script>

<style lang='scss' scoped>
.chp{
  min-width: 112px !important;
  min-height: 26px !important;
}
.activate{
color: white !important;
  width: 112px!important;
  height: 26px !important;
  background: #009D4C;
  border-radius: 12px !important;
  font-size: 12px !important;
}
.margi{
  margin-top: 64px
}
.sav{
  width: 171px;
 border: #00B728 2px solid;
}
span{
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: #747474;

}
#title{
  font-weight: 500;
  font-size: 26px;
  /* identical to box height */
  text-align: center;
  color: #747474;

}
</style>
