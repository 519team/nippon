import csv
import os
from glob import glob


if __name__=='__main__':
    csv_path = "catalog.csv"
    files_lst = glob(fr'{os.getcwd()}\*.csv')
    for csv_path in files_lst:
        cat=csv_path.split('/')[-1].split('.')[0][5:]
        cat_obj=Category.objects.get(name=cat)
        with open(csv_path, "r",encoding='utf-8') as f_obj:
            reader = csv.reader(f_obj, delimiter=';')
            for row in reader:
                try:
                    sub_cat_obj = SubCategory.objects.get(name=row[1])
                except:
                    sub_cat_obj=None
                product=Product(name=row[3],
                                category=cat_obj,
                                sub_category=sub_cat_obj,
                                article=row[2],
                                cost=row[4],
                                count=row[5],
                                dsc=row[6])
                product.save()
                images = row[7][2:-2].replace('\'', '').split(',')
                images = [t.replace(' ', '') for t in images]
                if len(images[0]) == 0:
                    product.save()
                else:
                    for img in images:
                        img=Images(path=img)
                        img.save()
                        product.images.add(img)
                product.save()
    # print(files_lst)
    # for file in files_lst:
    #     print(file.split('\\')[-1].split('.')[0][5:])

