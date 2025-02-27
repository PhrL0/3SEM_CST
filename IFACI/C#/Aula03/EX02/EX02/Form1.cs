using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EX02
{
    public partial class Pisca : Form
    {
        public Pisca()
        {
            InitializeComponent();
            pictureBox1.Image = Image.FromFile("C:\\users\\aluno\\verde.bmp");
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.Tag = "Verde";
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (pictureBox1.Tag.ToString() == "Verde")
            {
                pictureBox1.Visible = false;
                pictureBox2.Visible = true;
                pictureBox2.Image = Image.FromFile("C:\\users\\aluno\\vermelho.bmp");
                pictureBox2.SizeMode = PictureBoxSizeMode.StretchImage;
                pictureBox1.Tag = "Vermelho";
            } else if (pictureBox1.Tag.ToString() == "Vermelho")
            {
                pictureBox2.Visible = false;
                pictureBox1.Visible= true;
                pictureBox1.Image = Image.FromFile("C:\\users\\aluno\\verde.bmp");
                pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
                pictureBox1.Tag = "Verde";
            }
                
        }
    }
}
