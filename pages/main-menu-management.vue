<template>
  <div class="pa-2 pa-md-10">
    <v-row>
      <v-col cols="12" lg="3" md="3"
        ><v-autocomplete
          v-for="item in items"
          :key="item.id"
          :label="item.name"
          :items="item.children"
          item-text="name"
          background-color="#D0D0D0"
          hide-details
          outlined
        >
        </v-autocomplete>
        <v-expansion-panels class="mt-16" flat>
          <v-expansion-panel class="mb-2">
            <v-expansion-panel-header style="background-color: #d0d0d0">
              لینک اختصاصی
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col class="mt-4 pb-0" cols="12">
                  <span style="color: #747474">عنوان</span>
                  <v-text-field
                    background-color="white"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="mb-4 py-0" cols="12">
                  <span style="color: #747474">لینک خارجی</span>
                  <v-text-field
                    background-color="white"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="float-left">
                <v-btn color="primary" class="px-10" rounded>
                  اضافه کردن به منو
                </v-btn>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" lg="9" md="9">
        <span class="white--text" style="font-size: 0.9rem"
          >منوی مورد نظر را انتخاب کنید</span
        >
        <v-row>
          <v-col cols="12" lg="5" md="5">
            <v-autocomplete
              label="نام منو"
              :items="items"
              item-text="name"
              background-color="#fff"
              class="my-4"
              hide-details
              outlined
            >
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-card>
          <v-card-title class="card-title pa-10">نام منو</v-card-title>
          <v-card-text class="pa-2">
            <v-draggable-treeview v-model="treeItems" class="card">
              <template #label="{ item }" class="card">
                <div>{{ item.name }}</div>
              </template>
              <template #append>
                <v-row>
                  <v-col cols="12" lg="4" md="4" class="pr-4 pr-md-0">
                    <div class="float-left">
                      <v-btn
                        color="warning"
                        class="ma-1 card-btn"
                        elevation="0"
                        x-small
                        fab
                      >
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-pencil-alt</v-icon
                        > </v-btn
                      ><v-btn
                        class="ma-1 card-btn"
                        color="error"
                        elevation="0"
                        x-small
                        fab
                      >
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-trash-alt</v-icon
                        > </v-btn
                      ><v-btn color="primary" small class="ma-2 card-btn" icon>
                        <v-icon
                          :size="
                            $vuetify.breakpoint.lg || $vuetify.breakpoint.md
                              ? ''
                              : 15
                          "
                          >fas fa-plus</v-icon
                        >
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </template>
            </v-draggable-treeview>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="ml-4 mb-5">
              <v-btn color="primary" class="px-10" rounded>
                ذخیره اطلاعات رسته
              </v-btn>
            </div>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'صفحه‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 2,
          name: 'دسته‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 3,
          name: 'بلاگ',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 4,
          name: 'محصولات',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        }
      ],
      treeItems: [
        {
          id: 1,
          name: 'صفحه‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 2,
          name: 'دسته‌ها',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            {
              name: 'پشتیبان',
              children: [
                { name: 'صفحه اصلی' },
                { name: 'درباره ما' },
                { name: 'مدیر بازرسی' },
                { name: 'پشتیبان' },
                { name: 'مدیر بازرسی' },
                { name: 'پشتیبان' }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'بلاگ',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        },
        {
          id: 4,
          name: 'محصولات',
          children: [
            { name: 'صفحه اصلی' },
            { name: 'درباره ما' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' },
            { name: 'مدیر بازرسی' },
            { name: 'پشتیبان' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .card-btn {
    max-width: 25px;
    max-height: 25px;
  }
}
.card-title {
  color: #747474;
  font-size: 1.6rem;
}

.card {
  margin: 5px;
  background-color: #f4f4f4;
  border: 2px solid #dad9d9;
  border-radius: 4px;
}
</style>
